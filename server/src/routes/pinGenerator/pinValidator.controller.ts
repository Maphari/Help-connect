import { Response, Request } from "express";

function HttpValidatePin(req: Request, res: Response) {
  const { pin, generatedPin } = req.body;
  const pinInNumber: number = parseInt(pin);
  const generatedPinInNumber: number = parseInt(generatedPin)
  const isValid: boolean = pinInNumber === generatedPinInNumber

  if (isValid === false) {
    return res.json({ errorMessage: "Your pin does'nt match", validated: false });
  } else {
    res.status(200).json({ message: "Verification successful", validated: true });
  }
}

export { HttpValidatePin };
