import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Restaurant } from "@/types/restaurant";
import { Button } from "@/components/ui/button";

interface DocumentVerificationProps {
  documents: Restaurant['documents'];
  onDocumentUpdate: (documents: Restaurant['documents']) => void;
}

export const DocumentVerification = ({ documents, onDocumentUpdate }: DocumentVerificationProps) => {
  const handleDocumentUpload = (documentType: keyof Restaurant['documents']) => {
    // Simulate document upload
    const newDocumentUrl = `https://example.com/documents/${documentType}-${Date.now()}.pdf`;
    onDocumentUpdate({
      ...documents,
      [documentType]: newDocumentUrl,
    });
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Document Verification</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="font-medium">Business License</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={documents.businessLicense}
                readOnly
                className="flex-1 p-2 border rounded"
              />
              <Button onClick={() => handleDocumentUpload('businessLicense')}>
                Upload
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Food License</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={documents.foodLicense}
                readOnly
                className="flex-1 p-2 border rounded"
              />
              <Button onClick={() => handleDocumentUpload('foodLicense')}>
                Upload
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Tax Certificate</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={documents.taxCertificate}
                readOnly
                className="flex-1 p-2 border rounded"
              />
              <Button onClick={() => handleDocumentUpload('taxCertificate')}>
                Upload
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};