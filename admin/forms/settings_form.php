<fieldset>
    <div class="form-group">
        <label for="f_name">Title</label>
        <input type="text" name="title" placeholder="Title" class="form-control" required="required" id="f_name">
    </div>

    <div class="form-group">
        <label for="l_name">Description</label>
        <textarea type="text" name="description" placeholder="Desription" class="form-control" required="required" id="l_name">
        </textarea>
    </div>
    <div class="form-group">
        <label for="f_name">Images</label>
        <input type="file" name="photo" placeholder="Title" class="form-control" required="required" id="f_name">
    </div>
    <div class="form-group">
        <label>Status</label>
        <select name="status" class="form-control">
            <option value="0">Header</option>
            <option value="1">Section</option>
            <option value="2">Section 1</option>
            <option value="3">Footer</option>
        </select>
    </div>
    <div class="form-group text-center">
        <label></label>
        <button class="btn btn-warning">Save <span class="glyphicon glyphicon-send"></span></button>
    </div>

</fieldset>