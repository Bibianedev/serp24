package de.app.serp24.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name= "entry")
public class Entry {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long entryId;

    @Column
    private Date date;

    @Column
    private String hours;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id")
    private Project entryProject;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "consult_id")
    private Consultant entryConsultant;


}