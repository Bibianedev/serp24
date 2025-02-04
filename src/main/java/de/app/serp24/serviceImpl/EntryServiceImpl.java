package de.app.serp24.serviceImpl;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.app.serp24.dtos.EntryDto;
import de.app.serp24.repository.EntryRepository;
import de.app.serp24.service.EntryService;

import java.util.List;

@Transactional
@Service
public class EntryServiceImpl implements EntryService {

    @Autowired
    private EntryRepository entryRepository;

    @Override
    public List<EntryDto> getAllEntry() {
        return null;
    }
}
