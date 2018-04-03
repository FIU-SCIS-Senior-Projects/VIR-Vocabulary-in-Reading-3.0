package com.vir.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * Entity representation of a User.
 * 
 * @author Christian Hidalgo
 *
 */

@Entity
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "[id]")
	private Long id;

	@Column(name = "[full_name]")
	private String full_name;

	@Column(name = "[user_name]")
	private String user_name;

	@Column(name = "[password]")
	private String password;

	@Column(name = "[user_level]")
	private String user_level;

	//---constructors-----

	public User() {
	}

	public User(String full_name, String user_name, String password, String user_level) {
		super();
		this.user_name = user_name;
		this.full_name = full_name;
		this.password = password;
		this.user_level = user_level;
	}

	//-----getter methods----

	public String getUserName(){
		return this.user_name;
	}

	public String getFullName(){
		return this.full_name;
	}

	public Long getId(){
		return this.id;
	}

	public String getPassword(){
		return this.password;
	}

	public String getUserLevel(){
		return this.user_level;
	}

	//------setter methods-----

	public void setFullName(String full_name){
		this.full_name = full_name;
	}

	public void setUserName(String user_name){
		this.user_name = user_name;
	}

	public void setPassword(String password){
		this.password = password;	
	}

	public void setUserLevel(String user_level){
		this.user_level = user_level;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
