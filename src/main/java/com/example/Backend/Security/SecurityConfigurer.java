package com.example.Backend.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurer{

    @Autowired
    JwtAuthanticationFilter jwtAuthanticationFilter;

    @Autowired
    JwtEntryPoint jwtEntryPoint;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        System.out.println("inside security filter");
        http.csrf(csrf -> csrf.disable())
                .authorizeRequests().requestMatchers("/cart/**","/order/**","/payment/** ","/addr/**").authenticated()
                .requestMatchers("/admin/product/**","/admin/order/**").hasAuthority("ADMIN")
                .requestMatchers("/logIn/**","/signUp/**","/product/**","/forgetP/**").anonymous()
                .anyRequest()
                .authenticated()
                .and().exceptionHandling(ex -> ex.authenticationEntryPoint(jwtEntryPoint))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.addFilterBefore(jwtAuthanticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
