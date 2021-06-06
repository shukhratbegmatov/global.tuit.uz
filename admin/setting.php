<?php
session_start();
require_once './config/config.php';
require_once './includes/auth_validate.php';


//serve POST method, After successful insert, redirect to customers.php page.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //Mass Insert Data. Keep "name" attribute in html form same as column name in mysql table.
    $data_to_store = array_filter($_POST);

    //Insert timestamp
    $data_to_store['created_at'] = date('Y-m-d H:i:s');
    $db = getDbInstance();

    $last_id = $db->insert('customers', $data_to_store);

    if ($last_id) {
        $_SESSION['success'] = "Customer added successfully!";
        header('location: settings.php');
        exit();
    } else {
        echo 'insert failed: ' . $db->getLastError();
        exit();
    }
}

//We are using same form for adding and editing. This is a create form so declare $edit = false.
$edit = false;

require_once 'includes/header.php';
?>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Add Settings</h2>
        </div>
    </div>
    <div>
        <?php include_once('./settings/show.php'); ?>
    </div>
    <form class="form" action="settings/create.php" method="post" id="customer_form" enctype="multipart/form-data">
        <?php include_once('./forms/settings_form.php'); ?>
    </form>

</div>


<script type="text/javascript">
    $(document).ready(function() {
        $("#customer_form").validate({
            rules: {
                f_name: {
                    required: true,
                    minlength: 3
                },
                l_name: {
                    required: true,
                    minlength: 3
                },
            }
        });
    });
</script>

<?php include_once 'includes/footer.php'; ?>