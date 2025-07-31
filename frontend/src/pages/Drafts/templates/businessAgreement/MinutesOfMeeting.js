export const minutesOfMeetingFields = [
  "organizationName",
  "meetingDate",
  "meetingTime",
  "meetingLocation",
  "chairperson",
  "attendees",
  "agenda",
  "discussions",
  "decisions",
  "actionItems",
  "nextMeetingDate"
];

export const generateMinutesOfMeeting = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">MINUTES OF MEETING</h1>

  <div class="agreement-body">
    <p><strong>Organization:</strong> <span class="highlight">${data.organizationName}</span></p>
    <p><strong>Date:</strong> <span class="highlight">${data.meetingDate}</span></p>
    <p><strong>Time:</strong> <span class="highlight">${data.meetingTime}</span></p>
    <p><strong>Location:</strong> <span class="highlight">${data.meetingLocation}</span></p>
    <p><strong>Chairperson:</strong> <span class="highlight">${data.chairperson}</span></p>

    <h2>1. ATTENDEES</h2>
    <p><span class="highlight">${data.attendees}</span></p>

    <h2>2. AGENDA</h2>
    <p><span class="highlight">${data.agenda}</span></p>

    <h2>3. DISCUSSIONS</h2>
    <p><span class="highlight">${data.discussions}</span></p>

    <h2>4. DECISIONS MADE</h2>
    <p><span class="highlight">${data.decisions}</span></p>

    <h2>5. ACTION ITEMS</h2>
    <p><span class="highlight">${data.actionItems}</span></p>

    <h2>6. NEXT MEETING</h2>
    <p>Next meeting scheduled for: <span class="highlight">${data.nextMeetingDate}</span></p>

    <div class="signatures">
      <div class="signature-block">
        <p>_________________________</p>
        <p>Chairperson: <span class="highlight">${data.chairperson}</span></p>
        <p>Date: <span class="highlight">${data.meetingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
