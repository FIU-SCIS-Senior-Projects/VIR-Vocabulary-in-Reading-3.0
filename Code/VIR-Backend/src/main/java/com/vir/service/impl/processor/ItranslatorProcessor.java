package com.vir.service.impl.processor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.MXBean;
import javax.transaction.Transactional;

import com.google.cloud.translate.Translate;
import com.google.cloud.translate.Translate.TranslateOption;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;

import org.apache.commons.lang3.NotImplementedException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vir.model.Text;
import com.vir.model.Word;
import com.vir.model.WordMatch;
import com.vir.model.Itranslator;
import com.vir.repository.WordRepository;
import com.vir.service.TextProcessorService;
import com.vir.service.WordService;
import com.vir.service.ItranslatorService;

/**
 * Requesting translation from google.
 * 
 *
 *
 */
@Service("ITranslatorService")

public class ItranslatorProcessor implements ItranslatorService {

	@Override
	public Itranslator process(String text, String target) {
        Translate translate = TranslateOptions.getDefaultInstance().getService();
        Itranslator itranslator = new Itranslator();


        Translation translation =
        translate.translate(
            text,
            TranslateOption.targetLanguage(target));

    
        itranslator.setTranslated(translation.getTranslatedText());
        itranslator.setTarget(target);
        itranslator.setOriginal(text);   

		return itranslator;
	}

}