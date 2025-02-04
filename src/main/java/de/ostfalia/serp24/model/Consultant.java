package de.ostfalia.serp24.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name= "consultant")
public class Consultant {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long consultantId;

    @Column
    private String name;

    @OneToOne(mappedBy = "entryConsultant")
    @JsonIgnore
    private  Entry entry;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="project_id")
    @JsonBackReference
    private Project project;

}
