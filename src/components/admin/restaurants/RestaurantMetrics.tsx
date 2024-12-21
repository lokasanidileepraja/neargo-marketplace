import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Restaurant } from "@/types/restaurant";

interface RestaurantMetricsProps {
  restaurant: Restaurant;
  onMetricsUpdate: (metrics: Restaurant['metrics']) => void;
}

export const RestaurantMetrics = ({ restaurant, onMetricsUpdate }: RestaurantMetricsProps) => {
  const handleMetricChange = (key: keyof Restaurant['metrics'], value: number) => {
    onMetricsUpdate({
      ...restaurant.metrics,
      [key]: value,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Average Delivery Time</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="number"
            value={restaurant.metrics.averageDeliveryTime}
            onChange={(e) => handleMetricChange('averageDeliveryTime', Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500 mt-1">minutes</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="number"
            min="0"
            max="100"
            value={restaurant.metrics.customerSatisfaction}
            onChange={(e) => handleMetricChange('customerSatisfaction', Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500 mt-1">percentage</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Order Acceptance Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="number"
            min="0"
            max="100"
            value={restaurant.metrics.orderAcceptanceRate}
            onChange={(e) => handleMetricChange('orderAcceptanceRate', Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500 mt-1">percentage</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="number"
            value={restaurant.metrics.revenue}
            onChange={(e) => handleMetricChange('revenue', Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500 mt-1">USD</p>
        </CardContent>
      </Card>
    </div>
  );
};