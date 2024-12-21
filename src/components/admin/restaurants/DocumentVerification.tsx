import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Restaurant } from "@/types/restaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface DocumentVerificationProps {
  documents: Restaurant['documents'];
  onDocumentUpdate: (documents: Restaurant['documents']) => void;
}

export const DocumentVerification = ({ documents, onDocumentUpdate }: DocumentVerificationProps) => {
  const { toast } = useToast();

  const handleDocumentUpload = (documentType: keyof Restaurant['documents']) => {
    // Simulate document upload
    const newDocumentUrl = `https://example.com/documents/${documentType}-${Date.now()}.pdf`;
    const updatedDocuments = {
      ...documents,
      [documentType]: newDocumentUrl,
    };
    onDocumentUpdate(updatedDocuments);
    
    toast({
      title: "Document Updated",
      description: `${documentType} has been updated successfully`,
    });
  };

  const handleDocumentUrlChange = (documentType: keyof Restaurant['documents'], value: string) => {
    const updatedDocuments = {
      ...documents,
      [documentType]: value,
    };
    onDocumentUpdate(updatedDocuments);
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
              <Input
                type="text"
                value={documents.businessLicense}
                onChange={(e) => handleDocumentUrlChange('businessLicense', e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => handleDocumentUpload('businessLicense')}>
                Upload
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Food License</label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={documents.foodLicense}
                onChange={(e) => handleDocumentUrlChange('foodLicense', e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => handleDocumentUpload('foodLicense')}>
                Upload
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Tax Certificate</label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={documents.taxCertificate}
                onChange={(e) => handleDocumentUrlChange('taxCertificate', e.target.value)}
                className="flex-1"
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