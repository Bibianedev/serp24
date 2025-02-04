package de.ostfalia.serp24.service;

import de.ostfalia.serp24.dtos.EntryDto;
import de.ostfalia.serp24.model.Consultant;
import de.ostfalia.serp24.model.Entry;

import java.util.List;

public interface EntryService {

 List<EntryDto> getAllEntry();
}
