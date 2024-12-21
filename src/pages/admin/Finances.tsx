import { RevenueSummary } from "@/components/admin/finances/RevenueSummary";
import { TransactionList } from "@/components/admin/finances/TransactionList";

export default function Finances() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Finances</h2>
        <p className="text-muted-foreground">
          Manage your financial transactions and revenue
        </p>
      </div>
      <RevenueSummary />
      <TransactionList />
    </div>
  );
}