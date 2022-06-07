package org.springframework.samples.petclinic.visits.model;

import lombok.Data;

import java.util.Date;

@Data
public class VisitDTO {

    private Integer id;
    private Date date = new Date();
    private String description;
    private int petId;
}
