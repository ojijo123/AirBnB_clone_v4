// Wait for the document to be ready before running the script
$(document).ready(function () {
  
  // Create an empty object to store the checked amenities
  let checkedAmenities = {};

  // Listen for changes on any checkbox input
  $(document).on('change', "input[type='checkbox']", function () {
    
    // If the checkbox is checked, add the amenity to the checkedAmenities object
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } 
    else {
      delete checkedAmenities[$(this).data('id')];
    }

    // Get the list of selected amenity names from the checkedAmenities object
    let list = Object.values(checkedAmenities);

    // If there are selected amenities, display them as a comma-separated list
    if (list.length > 0) {
      $('div.amenities > h4').text(list.join(', '));
    } 
    // If no amenities are selected, clear the displayed text
    else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});

