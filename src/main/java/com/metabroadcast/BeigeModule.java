package com.metabroadcast;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({WebModule.class})
public class BeigeModule {
    
    public @Bean TestController testController() {
        return new TestController();
    }
}
