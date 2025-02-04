package de.ostfalia.serp24.serviceImpl;

import de.ostfalia.serp24.dtos.EntryDto;
import de.ostfalia.serp24.repository.EntryRepository;
import de.ostfalia.serp24.service.EntryService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
