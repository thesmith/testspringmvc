package thesmith.testspringmvc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({WebModule.class})
public class BootstrapModule {
    
    public @Bean TestController testController() {
        return new TestController();
    }
}
