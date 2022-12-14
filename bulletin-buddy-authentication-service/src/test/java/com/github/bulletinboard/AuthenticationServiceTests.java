package com.github.bulletinboard;

import com.github.bulletinboard.models.User;
import com.github.bulletinboard.services.AuthenticationService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class AuthenticationServiceTests {

	@Test
	void contextLoads() {
	}

	@Test
	void authenticationService_AddUser_ShouldAddUser_IfNotPresent(){
		// ARRANGE
		AuthenticationService authenticationService = new AuthenticationService();

		// ACT
		boolean result = authenticationService.addUser(creteAUser());

		//ASSERT
		assertTrue(result);
	}

	@Test
	void authenticationService_AddUser_ShouldAddUser_OnlyOnce(){
		// ARRANGE
		AuthenticationService authenticationService = new AuthenticationService();
		User user = creteAUser()

;		// ACT
		boolean firstAdd = authenticationService.addUser(user);
		boolean secondAdd = authenticationService.addUser(user);

		//ASSERT
		assertTrue(firstAdd);
		assertFalse(secondAdd);
	}

	@Test
	void authenticationService_AuthenticateUser_ShouldReturnTrue_IfUserIsRegistered(){
		// ARRANGE
		String username = "myName";
		String password = "myPassword";

		AuthenticationService authenticationService = new AuthenticationService();

		// ACT
		authenticationService.addUser(new User(username, password));

		//ASSERT
		boolean result = authenticationService.authenticateUser(username, password);
		assertTrue(result);
	}

	@Test
	void authenticationService_AuthenticateUser_ShouldReturnFalse_IfUserIsNotRegistered(){
		// ARRANGE
		final String USERNAME_NOT_REGISTERED = "notRegisteredUser";
		final String PASSWORD_NOT_REGISTERED = "notRegisteredPassword";
		AuthenticationService authenticationService = new AuthenticationService();

		// ACT
		boolean result = authenticationService.authenticateUser(USERNAME_NOT_REGISTERED, PASSWORD_NOT_REGISTERED);

		//ASSERT
		assertFalse(result);
	}

	private User creteAUser() {
		return new User("username", "password");
	}

	private User creteAUser(String username) {
		return new User(username, "password");
	}

}
