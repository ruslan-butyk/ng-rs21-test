import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacebookFilterOutput } from '../model/facebook-filter-output.interface';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CensusFilterOutput } from '../model/census-tilter-output.interface';

@Component({
  selector: 'rs21-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  public isFbLayerEnabled = false;
  public isTwitterLayerEnabled = false;
  public isCensusLayerEnabled = false;

  @Input() public placeTypes: string[];

  @Output() public fbLayerDisableChange: EventEmitter<boolean> = new EventEmitter();
  @Output() public fbFilterChange: EventEmitter<FacebookFilterOutput> = new EventEmitter();

  @Output() public twitterLayerDisableChange: EventEmitter<boolean> = new EventEmitter();

  @Output() public censusLayerDisableChange: EventEmitter<boolean> = new EventEmitter();
  @Output() public censusFilterChange: EventEmitter<CensusFilterOutput> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.fbLayerDisableChange.emit(this.isFbLayerEnabled);
  }

  public onFbLayerDisableChange(isEnabled: boolean, facebookPanel: MatExpansionPanel): void {
    this.fbLayerDisableChange.emit(isEnabled);
    this.closeExpansionPanel(isEnabled, facebookPanel);
  }

  public onTwitterLayerDisableChange(isEnabled: boolean, twitterPanel: MatExpansionPanel): void {
    this.twitterLayerDisableChange.emit(isEnabled);
    this.closeExpansionPanel(isEnabled, twitterPanel);
  }

  public onCensusPanelLayerDisableChange(isEnabled: boolean, censusPanel: MatExpansionPanel): void {
    this.censusLayerDisableChange.emit(isEnabled);
    this.closeExpansionPanel(isEnabled, censusPanel);
  }

  private closeExpansionPanel(isEnabled: boolean, panel: MatExpansionPanel): void {
    if (!isEnabled) {
      panel.close();
    }
  }

}
