for (var p=0; p<this.numPages; p++) {
    
  var rCrop = this.getPageBox("Crop",p); 
  rCrop[0] += 70; // Adjust Left Side 
  rCrop[1] -= 50; // Adjust Top Side 
  rCrop[2] -= 200; // Adjust Right Side 
  rCrop[3] += 50; // Adjust Bottom Side 
  this.setPageBoxes("Crop",p,p,rCrop);
    
}
