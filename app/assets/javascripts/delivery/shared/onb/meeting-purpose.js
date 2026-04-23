// Errors
function validateForm() {
    $('#error-form-group').removeClass('govuk-form-group--error');
    $('#error-message-1').remove();
    $('#error-summary').remove();

    var meetingPurpose = $('[name=meetingPurpose]');

    if (!meetingPurpose.is(':checked')) {
        $('#error-form-group').addClass('govuk-form-group--error');

        $('#radio-group').before('<p id="error-message-1" class="govuk-error-message"><span id="error-1"><span class="govuk-visually-hidden">Error:</span> Select the purpose of the meeting</span></p>');

        $('#myForm').before(
            '<div id="error-summary" class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1"><h2 class="govuk-error-summary__title" id="error-summary-title">There is a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#error-1">Select the purpose of the meeting</a></li></ul></div></div>'
        );
        $('#error-summary').focus();

        return false;
    }

    var existingTask = $('#myForm').data('existing-task');
    var existingPurpose = $('#myForm').data('existing-purpose');
    var selectedPurpose = $('[name=meetingPurpose]:checked').val();
    var currentTask = $('#myForm').data('current-task');

    // Check if the existing task is a meeting type and matches the current selection + purpose
    var meetingTasks = ['meeting-offer', 'meeting-arranged', 'meeting-outcome'];
    if (existingTask && existingPurpose && meetingTasks.indexOf(existingTask) !== -1 && existingTask === currentTask && selectedPurpose === existingPurpose) {
        $('#error-form-group').addClass('govuk-form-group--error');

        $('#radio-group').before('<p id="error-message-1" class="govuk-error-message"><span id="error-1"><span class="govuk-visually-hidden">Error:</span> You cannot create this task as it is already in progress</span></p>');

        $('#myForm').before(
            '<div id="error-summary" class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1"><h2 class="govuk-error-summary__title" id="error-summary-title">There is a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#error-1">You cannot create this task as it is already in progress</a></li></ul></div></div>'
        );
        $('#error-summary').focus();

        return false;
    }

    return true;
}
