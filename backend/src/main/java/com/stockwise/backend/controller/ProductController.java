// src/main/java/com/stockwise/backend/controller/ProductController.java
package com.stockwise.backend.controller;

import com.stockwise.backend.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products") // All endpoints in this class start with /api/products
public class ProductController {

    @GetMapping
    public List<Product> getAllProducts() {
        // For now, return a hardcoded list for testing
        // We will connect this to a real repository later
        return List.of(
            new Product("Laptop", 10, 1200.50),
            new Product("Mouse", 50, 25.00),
            new Product("Keyboard", 30, 75.99)
        );
    }
}