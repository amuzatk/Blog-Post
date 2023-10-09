interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
  }
  
  const Pagination: React.FC<PaginationProps> = ({
    postsPerPage,
    totalPosts,
    currentPage,
    onPageChange,
  }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => onPageChange(number)}
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Pagination;
  