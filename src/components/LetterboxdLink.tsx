import Link from "next/link";

interface LetterboxdLinkProps {
  username: string;
}

const LetterboxdLink: React.FC<LetterboxdLinkProps> = ({ username }) => {
  return (
    <Link
      href={`https://letterboxd.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center mt-4 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-md border border-gray-700 dark:border-gray-600 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
    >
      <i className="bi bi-film me-2"></i>
      Visit my Letterboxd profile
    </Link>
  );
};

export default LetterboxdLink;
