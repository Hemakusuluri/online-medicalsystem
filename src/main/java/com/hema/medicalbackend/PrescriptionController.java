package com.hema.medicalbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/prescriptions")   
public class PrescriptionController {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    // GET ALL
    @GetMapping("/getPrescriptions")
    public List<Prescription> getAll() {
        return prescriptionRepository.findAll();
    }

    // ADD
    @PostMapping("/addPrescription")
    public Prescription addPrescription(@RequestBody Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    // DELETE
    @DeleteMapping("/deletePrescription/{id}")
    public String deletePrescription(@PathVariable Long id) {
        prescriptionRepository.deleteById(id);
        return "Deleted Successfully";
    }

    // UPDATE
    @PutMapping("/updatePrescription/{id}")
    public Prescription updatePrescription(@PathVariable Long id, @RequestBody Prescription updated) {
        Prescription p = prescriptionRepository.findById(id).orElse(null);

        if (p != null) {
            p.setPatientName(updated.getPatientName());
            p.setMedicine(updated.getMedicine());
            return prescriptionRepository.save(p);
        }

        return null;
    }
}