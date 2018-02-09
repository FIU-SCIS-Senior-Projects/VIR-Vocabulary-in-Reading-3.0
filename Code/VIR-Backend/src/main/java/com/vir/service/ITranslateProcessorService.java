package com.vir.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vir.model.iTranslator;
import com.vir.model.WordMatch;

/**
 * Main service used when processing text.
 * 
 * @author Alfredo Lopez
 *
 */
@Service
public interface iTranslateProcessorService {
	public iTranslator process(String text, String target);
}
