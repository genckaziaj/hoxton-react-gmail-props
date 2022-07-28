import { Email } from "../components/Email";

export function Emails({ getFilteredEmails, setEmails }: any) {
  return (
    <main className="emails">
      <ul>
        {getFilteredEmails.map((email: any, index: any) => (
          <Email key={index} emailFiltered={email} setEmails={setEmails} />
        ))}
      </ul>
    </main>
  );
}
