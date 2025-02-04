package de.app.serp24.serviceImpl;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.app.serp24.dtos.ConsultantDto;
import de.app.serp24.model.Consultant;
import de.app.serp24.repository.ConsultantRepository;
import de.app.serp24.service.ConsultantService;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class ConsultantServiceImpl implements ConsultantService {

    @Autowired
    private ConsultantRepository consultantRepository;

    @Override
    public List<ConsultantDto> getAllConsultants() {
        List<Consultant> consultants = consultantRepository.findAll();
        return consultants.stream()
                .map(consultant -> new ConsultantDto(consultant.getConsultantId(), consultant.getName(),consultant.getProject().getName()))
                .collect(Collectors.toList());
    }

}
