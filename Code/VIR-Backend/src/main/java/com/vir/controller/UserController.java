package com.vir.controller;

import com.vir.repository.UserRepository;
import com.vir.model.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


import org.springframework.beans.factory.annotation.Autowired;

import com.vir.exception.ApiError;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;

/**
This is the operations for the user API, this API uses a repository in order to access the database created
**/

@RestController
@RequestMapping("/api/user")
@Api(tags = "user")
public class UserController {

	private UserRepository _userRepository;

	@Autowired
	public UserController(UserRepository userRepository){
		this._userRepository = userRepository;
	}
	
	@ApiOperation(value = "Gets all users in DB")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public Page<User> findAll(
			@RequestParam(value="page", defaultValue="0") int page,
			@RequestParam(value="size", defaultValue="20") int size,
			@RequestParam(value="sortKey", defaultValue="userName") String sortField,
			@RequestParam(value="sortDirection", defaultValue="ASC") Direction direction
			){
		
		Sort sort = new Sort(direction, sortField);
		PageRequest pageRequest = new PageRequest(page, size, sort);
		return _userRepository.findAll(pageRequest);
	}

	@ApiOperation(value = "Get the current user.")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@GetMapping(value = "{userName}", produces = MediaType.APPLICATION_JSON_VALUE)
	public User getUser(@PathVariable(name="userName", required=true) String userName) {
		
		return _userRepository.findByUserName(userName);
	}

	@ApiOperation(value = "Add the current user."	)
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@RequestMapping(method = {RequestMethod.POST}, value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public User addUser(@RequestBody(required=true) User user) {

		User exists = _userRepository.findByUserName( user.getUserName() );
		if (exists != null) {
			user.setId(exists.getId());
		}
		return _userRepository.save(user);
	}

	@ApiOperation(value = "Removes desired user")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@DeleteMapping(value = "{userName}" , produces = MediaType.APPLICATION_JSON_VALUE)
	public void removeUser(@RequestBody(required=true) String userName){
	
		User exists = _userRepository.findByUserName( userName );
		if ( !(exists != null) ){
			_userRepository.removeByUserName( userName );
		}

	}



}
