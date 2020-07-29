package com.example.johnnyfung.springtutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.johnnyfung.springtutorial.model.Assets;

public interface AssetsRepository extends JpaRepository<Assets, Long>{
// Maps a class (Asset.java class) to a database table (Asset table)
// and give you functions to do CRUD operations

}
