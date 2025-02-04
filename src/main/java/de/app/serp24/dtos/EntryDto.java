package de.app.serp24.dtos;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.Date;

import de.app.serp24.model.Consultant;
import de.app.serp24.model.Project;
@Data
public class EntryDto {
    private Long entryId;

    private Date date;

    private String hours;

    private Long project_id;

    private Long consult_id;
    private int entry;
}
