package com.vir.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.vir.model.User;

@Repository
public interface  UserRepository extends JpaRepository<User, Long> {

	User findByUserName(String userName);

	@Transactional
	Long removeByUserName(String userName);
}
	