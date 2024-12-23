import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const reviews = [
  {
    id: 1,
    restaurant: "Burger Palace",
    rating: 5,
    comment: "Amazing burgers and quick delivery!",
    date: "2024-03-15",
    helpful: 12,
    userHasMarkedHelpful: false,
  },
  {
    id: 2,
    restaurant: "Pizza Heaven",
    rating: 4,
    comment: "Great pizza but delivery was a bit slow",
    date: "2024-03-10",
    helpful: 8,
    userHasMarkedHelpful: true,
  },
  {
    id: 3,
    restaurant: "Sushi Express",
    rating: 5,
    comment: "Fresh sushi and excellent service",
    date: "2024-03-05",
    helpful: 15,
    userHasMarkedHelpful: false,
  },
];

export default function Reviews() {
  const [reviewsData, setReviewsData] = useState(reviews);

  const handleHelpful = (reviewId: number) => {
    setReviewsData(reviews.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          helpful: review.userHasMarkedHelpful ? review.helpful - 1 : review.helpful + 1,
          userHasMarkedHelpful: !review.userHasMarkedHelpful,
        };
      }
      return review;
    }));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">My Reviews</h1>
          
          <div className="space-y-4">
            {reviewsData.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{review.restaurant}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <p className="mt-4 text-gray-600">{review.comment}</p>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleHelpful(review.id)}
                      className={review.userHasMarkedHelpful ? 'text-primary' : ''}
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}