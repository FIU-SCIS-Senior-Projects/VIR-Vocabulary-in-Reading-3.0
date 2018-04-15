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

	@Column(name = "[fullName]")
	private String fullName;

	@Column(name = "[userName]")
	private String userName;

	@Column(name = "[password]")
	private String password;

	@Column(name = "[userLevel]")
	private String userLevel;

	//---constructors-----

	public User() {
	}

	public User(String fullName, String userName, String password, String userLevel) {
		super();
		this.userName = userName;
		this.fullName = fullName;
		this.password = password;
		this.userLevel = userLevel;
	}

	//-----getter methods----

	public String getUserName(){
		return this.userName;
	}

	public String getFullName(){
		return this.fullName;
	}

	public Long getId(){
		return this.id;
	}

	public String getPassword(){
		return this.password;
	}

	public String getUserLevel(){
		return this.userLevel;
	}

	//------setter methods-----

	public void setFullName(String fullName){
		this.fullName = fullName;
	}

	public void setUserName(String userName){
		this.userName = userName;
	}

	public void setPassword(String password){
		this.password = password;	
	}

	public void setUserLevel(String userLevel){
		this.userLevel = userLevel;
	}

	public void setId(Long id) {
		this.id = id;
	}

		@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this, ToStringStyle.JSON_STYLE);
	}

	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Word that = (Word) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
}
