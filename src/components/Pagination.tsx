
import PrevIcon from '../assets/icons/prev-btn.png'; 
import NextIcon from '../assets/icons/next-btn.png'; 

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate page numbers (1, 2, 3... 15, 16)
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 3 || i > totalPages - 2 || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(
          <span
            key={i}
            className={`page-number ${currentPage === i ? 'active' : ''}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </span>
        );
      } else if (pages[pages.length - 1]?.key !== 'dots') {
        pages.push(<span key="dots" className="dots">...</span>);
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      <div className="pagination__left">
        <span>Showing</span>
        <select 
          value={itemsPerPage} 
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>out of {totalItems}</span>
      </div>

      <div className="pagination__right">
        <button 
          disabled={currentPage === 1} 
          onClick={() => onPageChange(currentPage - 1)}
          className="nav-btn"
        >
          <img src={PrevIcon} alt="prev" />
        </button>
        
        <div className="page-numbers-container">
          {renderPageNumbers()}
        </div>

        <button 
          disabled={currentPage === totalPages} 
          onClick={() => onPageChange(currentPage + 1)}
          className="nav-btn"
        >
          <img src={NextIcon} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;