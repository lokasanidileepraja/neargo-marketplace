import { supabase } from "@/integrations/supabase/client";

export const createStorageBucket = async () => {
  const { data, error } = await supabase.storage.createBucket('restaurants', {
    public: true,
    fileSizeLimit: 52428800, // 50MB
    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
  });
  
  if (error) {
    console.error('Error creating bucket:', error);
    return false;
  }
  
  return true;
};