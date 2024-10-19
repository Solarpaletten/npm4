import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpenCashier, setIsOpenCashier] = useState(false); // Состояние для секции "Cashier"
  const [isOpenWarehouse, setIsOpenWarehouse] = useState(false); // Состояние для секции "Warehouse"

  return (
    <div className="sidebar">
      <h2>Solar</h2>
      <ul>
        <li><button>Clients</button></li>
        
        {/* Секция Warehouse с возможностью раскрытия */}
        <li>
          <button onClick={() => setIsOpenWarehouse(!isOpenWarehouse)}>
            Warehouse {isOpenWarehouse ? '-' : '+'}
          </button>
          {isOpenWarehouse && (
            <ul>
              <li><button>Item 1</button></li>
              <li><button>Item 2</button></li>
            </ul>
          )}
        </li>

        {/* Секция General Ledger (без раскрытия) */}
        <li><button>General ledger</button></li>

        {/* Секция Cashier с возможностью раскрытия */}
        <li>
          <button onClick={() => setIsOpenCashier(!isOpenCashier)}>
            Cashier {isOpenCashier ? '-' : '+'}
          </button>
          {isOpenCashier && (
            <ul>
              <li><button>Money receiving receipts</button></li>
              <li><button>Reference book</button></li>
            </ul>
          )}
        </li>

        {/* Обычные разделы */}
        <li><button>Reports</button></li>
        <li><button>Personnel</button></li>
        <li><button>Production</button></li>
        <li><button>Assets</button></li>
        <li><button>Documents</button></li>
        <li><button>Salary</button></li>
        <li><button>Declaration</button></li>
        <li><button>Settings</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
