package de.ostfalia.serp24.dtos;

import de.ostfalia.serp24.model.Project;
import lombok.Data;

@Data
public class ConsultantDto {
    private Long consultantId;
    private String name;
    private String projectName;



    public ConsultantDto(Long consultantId, String name, String projectName) {
        this.consultantId = consultantId;
        this.name = name;
        this.projectName = projectName;
    }
}
