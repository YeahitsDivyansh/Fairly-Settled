export const noticeOfMeetingFields = [
  "organizationName",
  "meetingType",
  "meetingDate",
  "meetingTime",
  "meetingLocation",
  "agenda",
  "contactPerson",
  "rsvpDetails",
  "noticeDate"
];

export const generateNoticeOfMeeting = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">NOTICE OF MEETING</h1>

  <div class="agreement-body">
    <p>Date of Notice: <span class="highlight">${data.noticeDate}</span></p>

    <p><strong>Organization:</strong> <span class="highlight">${data.organizationName}</span></p>

    <h2>NOTICE IS HEREBY GIVEN</h2>
    <p>A <span class="highlight">${data.meetingType}</span> meeting will be held:</p>

    <p><strong>Date:</strong> <span class="highlight">${data.meetingDate}</span></p>
    <p><strong>Time:</strong> <span class="highlight">${data.meetingTime}</span></p>
    <p><strong>Location:</strong> <span class="highlight">${data.meetingLocation}</span></p>

    <h2>AGENDA</h2>
    <p><span class="highlight">${data.agenda}</span></p>

    <h2>CONTACT INFORMATION</h2>
    <p>For more information, contact: <span class="highlight">${data.contactPerson}</span></p>

    <h2>RSVP</h2>
    <p><span class="highlight">${data.rsvpDetails}</span></p>

    <p>By order of the organization.</p>

    <div class="signatures">
      <div class="signature-block">
        <p>_________________________</p>
        <p>Secretary/Organizer</p>
        <p>Date: <span class="highlight">${data.noticeDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
