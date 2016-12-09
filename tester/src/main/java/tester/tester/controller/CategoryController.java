package tester.tester.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mysql.fabric.xmlrpc.base.Array;

import tester.tester.model.Category;

import tester.tester.service.CategoryService;



@RestController
@RequestMapping(value = "/categories")
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Category>> getCategories(){
		List<Category> listOfCategories = new ArrayList<Category>();
		listOfCategories = categoryService.findAll();
		System.out.println("pozvao");
		for (Category c: listOfCategories){
			System.out.println(c.getName());
		}
		return new ResponseEntity<List<Category>>(listOfCategories, HttpStatus.OK);
	}

}
