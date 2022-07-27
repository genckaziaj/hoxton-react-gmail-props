export function Email({ emailFiltered, emails, setEmails }: any) {
  const toggleStar = (targetEmail: any) => {
    const updatedEmails = () =>
      emails.map((email: any) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail: any) => {
    const updatedEmails = () =>
      emails.map((email: any) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  return (
    <li className={`email ${emailFiltered.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={emailFiltered.read}
          onChange={() => toggleRead(emailFiltered)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={emailFiltered.starred}
          onChange={() => toggleStar(emailFiltered)}
        />
      </div>
      <div className="sender">{emailFiltered.sender}</div>
      <div className="title">{emailFiltered.title}</div>
    </li>
  );
}
