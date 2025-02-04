package de.app.serp24.service;

import java.util.List;

import de.app.serp24.dtos.EntryDto;
import de.app.serp24.model.Consultant;
import de.app.serp24.model.Entry;

public interface EntryService {

 List<EntryDto> getAllEntry();
}
