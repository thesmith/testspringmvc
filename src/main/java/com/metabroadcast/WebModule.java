package com.metabroadcast;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.mvc.annotation.DefaultAnnotationHandlerMapping;
import org.springframework.web.servlet.view.ContentNegotiatingViewResolver;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Lists;
import com.metabroadcast.common.media.MimeType;
import com.metabroadcast.common.webapp.json.JsonView;
import com.metabroadcast.common.webapp.soy.SoyTemplateRenderer;
import com.metabroadcast.common.webapp.soy.SoyTemplateViewResolver;

@Configuration
public class WebModule {
    
    public @Bean DefaultAnnotationHandlerMapping controllerMappings() {
        DefaultAnnotationHandlerMapping controllerClassNameHandlerMapping = new DefaultAnnotationHandlerMapping();
        Object[] interceptors = { };
        controllerClassNameHandlerMapping.setInterceptors(interceptors);
        return controllerClassNameHandlerMapping;
    }

    public @Bean ViewResolver resolver() {
        ContentNegotiatingViewResolver resolver = new ContentNegotiatingViewResolver();

        resolver.setMediaTypes(ImmutableMap.of("json", MimeType.APPLICATION_JSON.toString(), "js", "text/javascript"));

        resolver.setFavorPathExtension(true);
        resolver.setIgnoreAcceptHeader(true);
        resolver.setDefaultContentType(MediaType.TEXT_HTML);
        resolver.setDefaultViews(ImmutableList.<View> of(new JsonView()));

        SoyTemplateViewResolver htmlResolver = new SoyTemplateViewResolver(soyRenderer());
        htmlResolver.setNamespace("beige.templates");
        
        SoyTemplateViewResolver jsResolver = new SoyTemplateViewResolver(soyRenderer(), "text/javascript");
        jsResolver.setNamespace("beige.templates");
        
        resolver.setViewResolvers(Lists.<ViewResolver>newArrayList(htmlResolver, jsResolver));
        return resolver;
    }

    @Bean SoyTemplateRenderer soyRenderer() {
        SoyTemplateRenderer renderer = new SoyTemplateRenderer();
        renderer.setPrefix("/WEB-INF/templates/");
        renderer.setSuffix(".soy");
        return renderer;
    }
}
