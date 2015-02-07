<?php include('base_top.html'); ?>
    <section style="margin-top:30px">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Event Form</h2>
                    <hr class="star-primary">
                </div>
            </div>
            
            <div class="col-lg-4">
                <form action="signup.js" method="POST">
                    
                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Event title*</label>
                    </div>          
                    
                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Location*</label>
                    </div>

                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Description*</label>
                    </div>  
                    
                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Event Organiser*</label>
                    </div>

                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Contact no.(in times of emergency)*</label>
                    </div>

                        <div class="checkbox" style="text-align:left;padding-left:20px;"><input type="checkbox" name="extras[]" value="contact" style="width:20px;"> Contact Info only to Volunteers</div>

                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>What do you require?</label>
                    </div>

                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>What do you require?</label>
                    </div>


                    <div class="group">
                        <input type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>What do you require?</label>
                    </div>
                    
                    <div>Event Pic<input type="file" name="doc"></div>
                    
                    <div class="btn btn-primary btn-block" style="margin-top:40px;">
                        
                            Submit
                    </div>
                </form> 
            </div>
        </div>
    </section>
<?php include('base_bottom.html'); ?>
