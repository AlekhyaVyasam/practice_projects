package com.example.playwrightsnapshot;




import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import org.springframework.stereotype.Service;

import java.nio.file.Paths;

@Service
public class SnapshotService {

    public String takeSnapshot(String url, String fileName) {
        try (Playwright playwright = Playwright.create()) {
            // Create a browser instance (use headless mode for better performance)
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));

            // Create a new browser page
            Page page = browser.newPage();

            // Navigate to the specified URL
            page.navigate(url);

            // Take a screenshot and save it to the specified file
            page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get(fileName)));

            // Close the browser
            browser.close();

            return "Snapshot saved successfully: " + fileName;
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to take snapshot: " + e.getMessage();
        }
    }
}
