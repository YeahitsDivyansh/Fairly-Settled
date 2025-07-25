export const noticeOfMeetingFields = [
  "companyName",
  "meetingNumber",
  "meetingType",
  "meetingDate",
  "meetingTime",
  "meetingLocation",
  "meetingAgendas",
  "noticeDate"
];

export const generateNoticeOfMeeting = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">NOTICE OF MEETING</h1>

  <div class="agreement-body">
    <p><span class="highlight">${data.noticeDate}</span></p>
    
    <p><strong>Re:</strong> Invitation letter to ${data.meetingType} Shareholders' Meeting No. <span class="highlight">${data.meetingNumber}</span></p>
    
    <p><strong>To:</strong> All shareholders of <span class="highlight">${data.companyName}</span>.</p>
    
    <p>Whereas the Board of Directors of <span class="highlight">${data.companyName}</span> (the "Company") has resolved to convene the ${data.meetingType} General Meeting of shareholder No. <span class="highlight">${data.meetingNumber}</span> on <span class="highlight">${data.meetingDate}</span> at <span class="highlight">${data.meetingTime}</span> at <span class="highlight">${data.meetingLocation}</span>, India (the "Meeting"), the shareholders of the Company are hereby invited to attend this Meeting to deliberate on the following agenda and proposed resolutions:</p>
    
    <div class="meeting-agendas">
      <span class="highlight">${data.meetingAgendas}</span>
    </div>
    
    <p>Therefore, the Board of Directors of <span class="highlight">${data.companyName}</span> would like to invite you as a shareholder to attend the Meeting according to the day, time, and place as mentioned above.</p>

    <p>Sincerely,</p>
    <div class="signatures">
      <div class="signature-block">
        <p>_________________________</p>
        <p>The Director</p>
      </div>
    </div>
  </div>
</div>`;
