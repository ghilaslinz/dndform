import React, { useEffect, useState } from "react";
import FormBuilder from "react-form-builder2";
import DemoBar from "../../components/demobar";

function EditForm({ id }) {
	const postUrl = `/api/findform/${id}`;
	
	var items = [{
		key: 'Header',
		name: 'Title form',
		icon: 'fas fa-heading',
		static: false,
		content: 'Placeholder Text...',
		canHavePageBreakBefore : false,
		canHaveAlternateForm : false,
	   
	  },
	
	  {


 key: 'Dropdown',
        canHaveAnswer: true,
        name: 'Dropdown',
        icon: 'far fa-caret-square-down',
        label: 'Placeholder Label',
        field_name: 'dropdown_',
        options: [],
	static: true,
	  read_only:false,
	canHaveAlternateForm : false,
	  canHavePageBreakBefore : false,
	  
	   
	  },
		{
		key: 'Checkboxes',
		canHaveAnswer: true,
		name: 'Checkboxes',
		icon: 'far fa-check-square',
		label: 'Placeholder Label',
		field_name: 'checkboxes_',
		static:false,
		canHaveDisplayHorizontal : false,
		options: [],
		canHavePageBreakBefore : false,
	  canHaveAlternateForm : false,
	  canPopulateFromApi : false,
		
	  },
	  {
		key: 'RadioButtons',
		canHaveAnswer: true,
		name: 'Multiple Choice',
		icon: 'far fa-dot-circle',
		label: 'Placeholder Label',
		field_name: 'radiobuttons_',
		static: false,
		options: [],
		canHaveDisplayHorizontal : false,
		canHavePageBreakBefore : false,
	   canHaveAlternateForm : false,
	   canPopulateFromApi : false,
		
	  },
	 ];
	return (
		<div>
			<DemoBar postUrl={postUrl} />
			<FormBuilder.ReactFormBuilder url={postUrl} saveUrl={postUrl} toolbarItems={items}/>
		</div>
	);
}

EditForm.getInitialProps = async ({ query }) => {
	const { id } = query;

	return {
		id: id,
	};
};

export default EditForm;
