package com.vir.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vir.model.Itranslator;

/**
 * Main service used when translating text.
 * 
 * 
 *
 */
@Service
public interface ItranslatorService {
	public Itranslator process(String text, String target);
}
