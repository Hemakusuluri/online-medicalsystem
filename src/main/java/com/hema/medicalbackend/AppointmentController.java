package com.hema.medicalbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentRepository repo;

    @PostMapping("/addAppointment")
    public Appointment add(@RequestBody Appointment a) {
        return repo.save(a);
    }

    @GetMapping("/getAppointments")
    public List<Appointment> getAll() {
        return repo.findAll();
    }
}