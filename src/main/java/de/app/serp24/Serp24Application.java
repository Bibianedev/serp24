package de.app.serp24;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import de.app.serp24.model.Customer;

@SpringBootApplication
public class Serp24Application  {

    public static void main(String[] args) {
        SpringApplication.run(Serp24Application.class, args);
    }

    @Configuration
    public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")  // Allow CORS on all /api/* routes
                    .allowedOrigins("http://localhost:3000")  // Allow requests from this origin (React app)
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Specify allowed HTTP methods
                    .allowedHeaders("*")  // Allow all headers
                    .exposedHeaders("Authorization")  // Expose Authorization header (optional)
                    .allowCredentials(true)  // Allow credentials (cookies, authorization headers, etc.)
                    .maxAge(3600);  // Cache the preflight response for 1 hour

        }
    }
}
