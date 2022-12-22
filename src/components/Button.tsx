import { resume } from "../assets";

interface Styles {
  email: string;
  styles?: string;
}

const MailToButton = ({ styles, email }: Styles) => {
  return (
    <button
      onClick={() => window.open(`mailto:${email}`)}
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Email me
    </button>
  );
};

const DownloadResumeButton = () => {
  return (
    <button
      // onClick={() => window.open(`mailto:${text}`)}
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
    >
      <a href={resume} target="blank">
        Download Resume
      </a>
    </button>
  );
};

export { MailToButton, DownloadResumeButton };
