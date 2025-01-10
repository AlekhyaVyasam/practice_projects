package com.example.playwrightsnapshot;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SnapshotController {

    private final SnapshotService snapshotService;

    public SnapshotController(SnapshotService snapshotService) {
        this.snapshotService = snapshotService;
    }

    @GetMapping("/snapshot")
    public String takeSnapshot(@RequestParam String url, @RequestParam String fileName) {
        try {
            snapshotService.takeSnapshot(url, fileName);
            return "Snapshot saved successfully: " + fileName;
        } catch (Exception e) {
            return "Failed to take snapshot: " + e.getMessage();
        }
    }
}
